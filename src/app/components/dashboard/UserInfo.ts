export class UserInfo
{
    
    first_name :string;
    last_name :string;
    dob :string;
    email :string;
    mobile :string;
    gender :string;
    memberCode :string;
    city :string;
    province :string;
    postal_code :string;
    profession :string;
    cognitoresponse :object;
    is_admin: boolean; 
    constructor(memcode="",first_name="",last_name="",dob="",email="",mobile="",gender="",city="",province="",postcode="",profession=""){
        this.memberCode=memcode;
        this.first_name=first_name;
        this.last_name=last_name;
        this.dob=dob;
        this.email=email;
        this.mobile=mobile;
        this.gender=gender;
        this.city=city;
        this.province=province;
        this.postal_code=postcode;
        this.profession=profession;
    }
}
