/// create parent class
class HospitalEmployee {
  /// constructor sets default values for object
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  /// function to reduce vacation days
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  /// function to generate a random password
  static generatePassword() {
    const randomNumber = Math.floor(Math.random()*10000);
    return randomNumber;
  }
}

/// create child class using 'extends'
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  /// function to add new certification
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

/// Output:
/// 15

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

/// Output:
/// [ 'Trauma', 'Pediatrics', 'Genetics' ]
