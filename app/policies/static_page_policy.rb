class StaticPagePolicy < ApplicationPolicy
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
      scope.all
    end
  end
end
