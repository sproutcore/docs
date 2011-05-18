require 'thor'

require 'sc_docs/generator'

module ScDocs
  class CLI < Thor

    class_option :input_dir,  :aliases => ['-i'], :type => :string,
      :banner => "Directory to generate docs for"
    class_option :output_dir, :aliases => ['-o'], :type => :string,
      :banner => "Directory to output docs to"
    class_option :update,     :aliases => ['-u'], :type => :boolean, :default => false,
      :banner => "If input is a git repo, pull and rebase"
    class_option :template,   :aliases => ['-t'], :type => :string,
      :banner => "Path to jsdoc template (forces HTML output)"
    class_option :verbose,    :aliases => ['-v'], :type => :boolean, :default => false

    desc "generate", "Generate docs"
    method_option :project, :aliases => ['-p'], :type => :string,
      :banner => "SproutCore Project Name"
    def generate
      puts "Generating Documentation...\n\n"
      run_generator
    end

    desc "preview", "Preview docs output"
    def preview
      puts "Building Documentation Preview...\n\n"
      run_generator(true)
    end

    private

      def run_generator(preview=false)
        update_repo if options[:update]

        puts options[:template]
        generator = (options[:template] ? HtmlGenerator : ScGenerator).new(options)
        preview ? generator.preview : generator.generate
      end

      def update_repo
        puts "Updating repository...\n\n" if options[:verbose]
        
        if File.directory? input_dir and File.directory? "#{input_dir}/.git"
          Dir.chdir input_dir do
            run("git fetch", print_output)
            run("git rebase origin master", print_output)
          end
        end
      end

  end
end
