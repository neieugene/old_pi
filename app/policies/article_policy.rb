class ArticlePolicy < ApplicationPolicy
  def index?
    user.has_any_role? :admin, :redactor
  end

  def create?
    user.has_any_role? :admin, :redactor
  end

  def update?
    user.has_any_role? :admin, :redactor
  end

  def destroy?
    user.has_any_role? :admin, :redactor
  end

  class Scope < Scope
    def resolve
      if user.has_any_role? :admin, :redactor
        scope.all
      else
        scope.left_outer_joins(edition: :users).where('users.id = ? or articles.access_level = ?', @user.id, Article.access_levels[:everyone])
      end
    end
  end
end
