class Api::GreetingsController < ApplicationController
    def hello
        @message = Greeting.order("RANDOM()").first.text
        render json: { message: @message }
      end
end
