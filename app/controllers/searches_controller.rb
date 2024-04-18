class SearchesController < ApplicationController
  def search
    @book = Book.new
    @books = @q.result
  end
end
