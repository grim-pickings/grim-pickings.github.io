<script>
	import Web from '$lib/website';

	// var config = {
	// 	apiKey: 'AIzaSyD8CYXSlPCQilr7vMHgETTwX9-uen8DegQ',
	// 	authDomain: 'grim-pickings.firebaseapp.com',
	// 	databaseURL: 'https://grim-pickings-default-rtdb.firebaseio.com',
	// 	projectId: 'grim-pickings',
	// 	storageBucket: 'grim-pickings.appspot.com',
	// 	messagingSenderId: '321184072556',
	// 	appId: '1:321184072556:web:62eb9bf2b157fc275f2949',
	// 	measurementId: 'G-L2BCWQ6WY9'
	// };

	// // Initialize Firebase
	// // TODO: Missing Firebase Config
	// firebase.initializeApp(config);
	// this.firebaseToken = document.querySelector('#firebase-token');
	// this.firebaseToken.innerHTML = 'Welcome !';

	// // User SignUp
	// function authRegister(event) {
	// 	event.preventDefault();
	// 	var registerForm = document.querySelector("form[name='registerForm']");
	// 	var reg_email = registerForm.find('#register_email').val();
	// 	var reg_password = registerForm.find('#register_password').val();
	// 	var email = document.getElementById('register_email').value;
	// 	var password = document.getElementById('register_password').value;
	// 	var name = document.getElementById('register_name').value;

	// 	const user = firebase
	// 		.auth()
	// 		.createUserWithEmailAndPassword(email, password)
	// 		.then(function (result) {
	// 			this.firebaseToken.innerHTML = 'Registered successfully !';
	// 			firebase
	// 				.database()
	// 				.ref('Users/' + result.user)
	// 				.set({
	// 					Name: name,
	// 					Email: email,
	// 					Password: password
	// 				});
	// 		})
	// 		.catch(function (err) {
	// 			alert(err.message);
	// 		});
	// }

	// // User SignIn
	// function authLogin(event) {
	// 	event.preventDefault();
	// 	var loginForm = document.querySelector("form[name='loginForm']");
	// 	var log_email = loginForm.find('#login_email').val();
	// 	var log_password = loginForm.find('#login_password').val();

	// 	firebase
	// 		.auth()
	// 		.signInWithEmailAndPassword(log_email, log_password)
	// 		.then(function () {
	// 			this.firebaseToken.innerHTML = 'Sign-in Successful !';
	// 			console.log('sign in successful !');
	// 			// outputFirebaseData();
	// 		})
	// 		.catch(function (err) {
	// 			alert(err.message);
	// 		});
	// }

	// function outputFirebaseData() {
	// 	this.firebaseToken.innerHTML = 'Hello world';
	// }
</script>

<Web>
	<div class="row">
		<div class="col l4 offset-l4 m6 offset-m3 s12" id="authCard">
			<div class="card">
				<ul class="tabs">
					<li class="tab col s3 waves-effect">
						<a href="#registerSection" class="active">Register</a>
					</li>
					<li class="tab col s3 waves-effect"><a href="#loginSection">Login</a></li>
				</ul>
				<div class="card-content">
					<div class="row">
						<div id="registerSection" class="col s12 animated slideInUp">
							<div class="card-title">Register</div>
							<div class="row">
								<form action="" name="registerForm" onSubmit="authRegister(event)">
									<div class="col s12 padding-0">
										<div class="input-field">
											<input type="text" id="register_name" class="validate" autocomplete="off" />
											<label for="register_name">Enter your Name</label>
										</div>
									</div>
									<div class="col s12 padding-0">
										<div class="input-field">
											<input type="text" id="register_email" class="validate" autocomplete="off" />
											<label for="register_email">Enter your Email</label>
										</div>
									</div>
									<div class="col s12 padding-0">
										<div class="input-field">
											<input type="password" id="register_password" class="validate" />
											<label for="register_password">Enter your Password</label>
										</div>
									</div>
									<div class="col s12 padding-0">
										<button type="submit" class="btn btn-large green accent-4 center-block"
											>Register Now</button
										>
									</div>
								</form>
							</div>
						</div>
						<div id="loginSection" class="col s12 animated slideInUp">
							<div class="card-title">Login</div>
							<div class="row">
								<form action="" name="loginForm" onSubmit="authLogin(event)">
									<div class="col s12 padding-0">
										<div class="input-field">
											<input type="text" id="login_email" class="validate" autocomplete="off" />
											<label for="login_email">Enter your Email</label>
										</div>
									</div>
									<div class="col s12 padding-0">
										<div class="input-field">
											<input type="password" id="login_password" class="validate" />
											<label for="login_password">Enter your Password</label>
										</div>
									</div>
									<div class="col s12 padding-0">
										<button type="submit" class="btn btn-large green accent-4 center-block"
											>Login Now</button
										>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="root" class="row">
		<div class="col l4 offset-l4 m6 offset-m3 s12">
			<div class="card">
				<div class="card-content" id="firebase-token" />
			</div>
		</div>
	</div>
</Web>

<style>
	@import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css';
	@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css';

	.tabs {
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		position: relative;
		overflow-x: hidden;
		overflow-y: hidden;
		height: 65px;
		background-color: #fff;
		margin: 0 auto;
		width: 100%;
		white-space: nowrap;
	}

	.margin-0 {
		margin: 0 !important;
	}
	.padding-0 {
		padding: 0 !important;
	}
	.center-block {
		width: 100%;
	}

	#authCard .card .card-content {
		overflow: hidden;
	}
	#authCard .tabs .tab a {
		color: #eee;
	}
	#authCard .tabs .tab a.active {
		color: #00c853;
	}
	#authCard .tabs .indicator {
		background-color: #00c853;
		background: none;
	}
	#registerSection,
	#loginSection {
		overflow: hidden;
	}
	button[type='submit'].btn-large.green.accent-4 {
		margin-top: 30px;
	}
</style>
