class Program {
  func caesarCipherEncryptor(string: String, key: UInt32) -> String {
    var newLetters = [Character]()
		let newKey = key % 26

		let alphabet = Array("abcdefghijklmnopqrstuvwxyz")

		for letter in string {
			newLetters.append(getNewLetter(letter, newKey, alphabet))
		}
    return String(newLetters)
  }

	func getNewLetter(_ letter: Character, _ key: UInt32, _ alphabet: [Character]) -> Character {
		let newLetterCode = alphabet.firstIndex(of: letter)! + Int(key)
		return alphabet[newLetterCode % 26]
	}
}