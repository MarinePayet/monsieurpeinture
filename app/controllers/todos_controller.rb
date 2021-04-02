class TodosController < ApplicationController

  def new
      @todo = Todo.new
    end

   def create
      @todo = Todo.new(todo_params)
      # @todo.user = current_user
      if @todo.save
        redirect_to todo_path(@todo)
      else
        render :new
      end
    end

    def show
      @todo = Todo.find(params[:id])
      # @user = @todo.user

    end

   private

    def todo_params
      params.require(:todo).permit(:title, :description)
    end
end
