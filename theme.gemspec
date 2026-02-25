# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "theme"
  spec.version       = "0.1.0"
  spec.authors       = ["zbule"]
  spec.email         = ["zbule@bluestar03.xyz"]

  spec.summary       = "Minimal Jekyll theme for markdown docs"
  spec.homepage      = "https://github.com/yourname/minidocs-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency "jekyll", ">= 3.9", "< 5.0"
end
