class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        users = User.all
        render json: users, status: :ok
    end

    def create 
        new_user = User.create!(user_params)
        render json: new_user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        if(user)
            render json: user, serializer: UserHangersSerializer
        else 
            render json: {error: "Not authorized"}, status: :unauthorized
        end
        # render json: @current_user
    end

  private

  def user_params
    params.permit(:username, :password, :profile_pic)
  end

      def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
