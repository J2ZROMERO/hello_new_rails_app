class Api::GreetingsController < ApplicationController
    def hello
        render json: { message: "Hello, world!" }
      end
end
