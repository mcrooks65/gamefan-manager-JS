class DeveloperSerializer < ActiveModel::Serializer
  attributes :id, :name, :employees, :location
  has_many :games
  has_many :fans, through: :games
end
