const StringChallenge = (str) => {
    const regexps = [/[A-Z]/, /\d/, /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/]
    const isInValidLength = str.length > 7 && str.length < 31
    if(regexps.some(regex => !regex.test(str)) || str.includes('password') || !isInValidLength) return false
  
    return true
}