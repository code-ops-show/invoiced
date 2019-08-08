# frozen_string_literal: true

module WebToken
  SECRET = Rails.application.secrets.secret_key_base

  class << self
    def decode(token)
      JWT.decode(
        token,
        WebToken::SECRET,
        true, algorithm: 'HS256'
      ).first
    rescue JWT::ExpiredSignature
      :expired
    end

    def encode(user)
      JWT.encode(token_params(user), WebToken::SECRET, 'HS256')
    end

    private

    def token_params(user)
      {
        user_id: user.id,
        exp: expiry
      }
    end

    def expiry
      (Time.now + 2.weeks).to_i
    end
  end
end
