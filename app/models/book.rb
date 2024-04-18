class Book < ApplicationRecord
  acts_as_taggable
  
  belongs_to :user
  has_many :book_comments, dependent: :destroy
  has_many :favorites, dependent: :destroy

  validates :title,presence:true
  validates :body,presence:true,length:{maximum:200}

  def self.ransackable_attributes(auth_object = nil)
    ["title"]
  end
  
  def self.ransackable_associations(auth_object = nil)
    ["user"]
  end
  
  
  def favorited_by?(user)
    favorites.where(user_id: user.id).exists?
  end
end
