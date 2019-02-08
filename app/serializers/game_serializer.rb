class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :genre, :price, :developer_id
  belongs_to :developer
  has_many :fans
end
