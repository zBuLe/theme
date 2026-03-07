Gem::Specification.new do |s|
  s.name          = "minimal-all-purpose-theme"
  s.version       = "0.1.0"
  s.summary       = "A minimalist Jekyll theme for remote use."
  s.authors       = ["Your Name"]
  s.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(_layouts|_includes|assets|_config\.yml|LICENSE|README)/}) }
end