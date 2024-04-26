class SearchesController < ApplicationController
  def search
    @book = Book.new
    if params[:search_type] == 'tag'
      @books = Book.tagged_with(params[:tag])
      @books = @books.filter{|book| book.user_id == params[:user_id].to_i} if params[:user_id]
    else
      @q = Book.ransack(search_params)
      @books = @q.result.eager_load(:user, :favorites, :book_comments, :tags)
    end
  end
  
  private
  def search_params
    params.fetch(:q, {}).permit(:title_cont, :user_id_eq, :user_name_cont)
  end

end
