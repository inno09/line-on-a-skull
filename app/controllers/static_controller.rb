class StaticController < ApplicationController
    def home
        render json: {status: "Happy coding..."}
      end
end
