import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Auth, CognitoUser } from "@aws-amplify/auth";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { UserInfo } from "../components/dashboard/UserInfo";
@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  cognitoUser: CognitoUser;
  private currentUserSubject: BehaviorSubject<UserInfo>;
  public isLogin: BehaviorSubject<Boolean>;
  public currentUser: Observable<UserInfo>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserInfo>(
      JSON.parse(localStorage.getItem("authUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
    if (this.currentUserSubject.value) {
      this.isLogin = new BehaviorSubject<Boolean>(true);
    } else {
      this.isLogin = new BehaviorSubject<Boolean>(false);
    }
  }

  public get currentUserValue(): UserInfo {
    return this.currentUserSubject.value;
  }

  // SignUp
  async signUp(
    username: string,
    password: string,
    fname: string,
    lname: string,
    memCode: string
  ): Promise<any> {
    return await Auth.signUp({
      username,
      password,

      attributes: {
        email: username,
        given_name: fname,
        family_name: lname,
        "custom:member_code": memCode,
      },
    });
  }
  // ConfirmSignUp
  async confirmSignUp(email: string, code: string): Promise<any> {
    return await Auth.confirmSignUp(email, code);
  }
  // ResendSignUp
  async resendSignUp(email: string): Promise<any> {
    return await Auth.resendSignUp(email);
  }
  // SignIn
  async signIn(userName: string, password: string): Promise<any> {
    return await Auth.signIn(userName, password).then((response) => {
      let user = new UserInfo();
      user.cognitoresponse = response;
      localStorage.setItem("authUser", JSON.stringify(user));
      this.currentUserSubject.next(user);
      return response;
    });
  }



  // ForgotPassword
  async forgotPassword(email: string): Promise<any> {
    return await Auth.forgotPassword(email);
  }
  // ForgotPasswordSubmit
  async forgotPasswordSubmit(
    email: string,
    code: string,
    newPassword: string
  ): Promise<any> {
    return await Auth.forgotPasswordSubmit(email, code, newPassword);
  }
  // SignOut
  async signOut(): Promise<any> {
    return await Auth.signOut({ global: false }).then((response) => {
      localStorage.removeItem("authUser");
      this.currentUserSubject.next(null);
      this.isLogin.next(false);

      return response;
    });
  }
  // CheckIfCurrentAuthenticatedUser
  async checkIfCurrentAuthenticatedUser(): Promise<any> {
    try {
      await Auth.currentSession();
      this.cognitoUser = await Auth.currentAuthenticatedUser();
    } catch (error) {
      throw error;
    }
  }

  //getlogineuser details
  getuserLoginDetial() {
    console.log("I am in function GET");
    const currentUser = JSON.parse(localStorage.getItem("authUser"));
  
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:
        currentUser.cognitoresponse.signInUserSession.idToken.jwtToken,
    });
    return this.http
      .get<UserInfo>(
        "https://hwslw9mud3.execute-api.us-east-2.amazonaws.com/prod/auth",
        { headers: header }
      )
      .pipe(
        map((user) => {
          user.cognitoresponse =currentUser.cognitoresponse;
           localStorage.setItem('authUser', JSON.stringify(user));
           this.currentUserSubject.next(user);
          return user;
        })
      );
  }


  //update User details
  putUpdatedUserDetails(id, userreqBody) {
    console.log("I am in function PUT");
    const currentUser = JSON.parse(localStorage.getItem("authUser"));
    console.log(currentUser.cognitoresponse.signInUserSession.idToken.jwtToken);
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:
        currentUser.cognitoresponse.signInUserSession.idToken.jwtToken,
    });

    return this.http.put(
      `https://hwslw9mud3.execute-api.us-east-2.amazonaws.com/prod/userpifdetails?id=${id}`,
      userreqBody,
      { headers: header }
    );
  }
  //create user details in dynamoDB
  postUserDetails(userreqBody) {
    console.log("I am in function POST");
    const currentUser = JSON.parse(localStorage.getItem("authUser"));

    const header = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return this.http.post(
      `https://hwslw9mud3.execute-api.us-east-2.amazonaws.com/prod/userpifdetails`,
      userreqBody,
      { headers: header }
    );
  }

  //delete the user details
  deleteUpdatedUserDetails(id) {
    console.log("I am in function PUT");
    const currentUser = JSON.parse(localStorage.getItem("authUser"));
    console.log(currentUser.cognitoresponse.signInUserSession.idToken.jwtToken);
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:
        currentUser.cognitoresponse.signInUserSession.idToken.jwtToken,
    });

    return this.http.delete(
      `https://hwslw9mud3.execute-api.us-east-2.amazonaws.com/prod/userpifdetails?id=${id}`,
      { headers: header }
    );
  }

  //get all users
  getallUserDetails() {
    console.log("I am in function GET");
    const currentUser = JSON.parse(localStorage.getItem("authUser"));
    console.log(currentUser.cognitoresponse.signInUserSession.idToken.jwtToken);
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:
        currentUser.cognitoresponse.signInUserSession.idToken.jwtToken,
    });
    return this.http.get<UserInfo[]>(
      "https://hwslw9mud3.execute-api.us-east-2.amazonaws.com/prod/userpifdetails",
      { headers: header }
    );
  }

  //get user
  getuserDetail(id) {
    console.log("I am in function GET");
    const currentUser = JSON.parse(localStorage.getItem("authUser"));
    console.log(currentUser.cognitoresponse.signInUserSession.idToken.jwtToken);
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization:
        currentUser.cognitoresponse.signInUserSession.idToken.jwtToken,
    });
    return this.http.get<any>(
      `https://hwslw9mud3.execute-api.us-east-2.amazonaws.com/prod/userpifdetails?id=${id}`,
      { headers: header }
    );
  }
}
