# passwordValidation
#the same in one line just for me const StringChallengeShort = (str) => !([/[A-Z]/, /\d/, /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/].some(regex => !regex.test(str)) || str.includes('password') || !(str.length > 7 && str.length < 31))
