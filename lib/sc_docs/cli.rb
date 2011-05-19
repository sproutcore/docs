require 'thor'

require 'sc_docs/generator'

module ScDocs
  class CLI < Thor

    class_option :update,     :aliases => ['-u'], :type => :boolean, :default => false,
      :banner => "If input is a git repo, pull and rebase"
    class_option :template,   :aliases => ['-t'], :type => :string,
      :banner => "Path to jsdoc template (forces HTML output)"
    class_option :verbose,    :aliases => ['-v'], :type => :boolean, :default => false

    desc "generate DIRECTORY", "Generate docs"
    method_option :output_dir, :aliases => ['-o'], :type => :string, :required => true,
      :banner => "Directory to output docs to"
    method_option :project, :aliases => ['-p'], :type => :string,
      :banner => "SproutCore Project Name"
    def generate(directory)

      puts "Generating Documentation...\n\n"
      update_repo
      generator(directory).generate
    end

    desc "preview DIRECTORY", "Preview docs output"
    method_option :output_dir, :aliases => ['-o'], :type => :string, :required => false,
      :banner => "Directory to output docs to (defaults to a tempfile)"
    def preview(directory)
      puts "Building Documentation Preview...\n\n"
      update_repo
      with_temp_output{ generator(directory).preview }
    end

    private

      def output_dir
        @output_dir || options[:output_dir]
      end

      def generator(directory)
        opts = options.merge(:output_dir => output_dir)
        (opts[:template] ? HtmlGenerator : ScGenerator).new(directory, opts)
      end

      def update_repo
        return unless options[:update]

        puts "Updating repository...\n\n" if options[:verbose]

        if File.directory? input_dir and File.directory? "#{input_dir}/.git"
          Dir.chdir input_dir do
            run("git fetch", print_output)
            run("git rebase origin master", print_output)
          end
        end
      end

      def with_temp_output
        using_temp_dir = output_dir.nil? || output_dir.empty?

        if using_temp_dir
          require 'tempfile' # For Dir.tmpdir
          @output_dir = File.join(Dir.tmpdir, "docs#{rand(100000)}")
        end

        yield
      ensure
        if using_temp_dir
          FileUtils.rm_rf output_dir
          @output_dir = nil # Probably not necessary
        end
      end

  end
end
