class QuoteController < ApplicationController
  def new
    quote = Quote.offset(rand(Quote.count)).first
    render json: quote
  end
end
