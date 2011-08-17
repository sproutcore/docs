lib = File.expand_path('../lib/', __FILE__)
$:.unshift lib unless $:.include?(lib)

require 'sc_docs/version'

Gem::Specification.new do |s|
  s.name        = "sc-docs"
  s.version     = ScDocs::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Majd Taby", "Peter Wagenet"]
  s.email       = ["majd@sproutcore.com", "peterw@sproutcore.com"]
  s.homepage    = "http://sproutcore.com"
  s.summary     = %q{Docs Generator for SproutCore}
  s.description = %q{A tool to generate docs for SproutCore and SproutCore applications.}

  s.required_rubygems_version = ">= 1.3.6"

  s.add_dependency "thor"
  s.add_dependency "rack"

  s.files              = `git ls-files`.split("\n")
  s.test_files         = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables        = %w(sc-docs)
  s.require_paths      = ["lib"]
end


