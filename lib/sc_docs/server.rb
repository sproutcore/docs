require 'rack'

module ScDocs
  class Server < ::Rack::Server
    def initialize(directory)
      @directory = directory

      begin
        require 'thin'
        super(:server => Thin, :Port => 9292)
      rescue LoadError
        super(:server => WEBrick, :Host => "localhost:9292")
      end
    end

    def app
      Rack::Directory.new(@directory)
    end
  end
end
