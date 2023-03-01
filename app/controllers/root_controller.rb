class RootController < ApplicationController
  def index
  end
  def hoho
    @message = Greeting.order("RANDOM()").first.text
    render json: { message: @message }
  end
end
