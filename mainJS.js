function disableBodyScroll() {
            document.body.style.overflow = 'hidden';
        }
        function enableBodyScroll() {
            document.body.style.overflow = '';
        }

        function Login(){
            if (document.getElementById('username').value==''){document.getElementById('username').style.borderColor="red";alert('Incorrect Username');}//change color here
            if (document.getElementById('password').value==''){document.getElementById('password').style.borderColor="red";alert('Incorrect Password');}//change color here
            if (document.getElementById('username').value==''){document.getElementById('username').style.borderColor="red";alert('Incorrect Username');document.getElementById('username').value='';}//change color here
            if (document.getElementById('password').value==''){document.getElementById('password').style.borderColor="red";alert('Incorrect Password');document.getElementById('password').value='';}//change color here
        }

        function signUp(){
            if (document.getElementById('username').value==''){document.getElementById('username').style.borderColor="red";}//change color here
            if (document.getElementById('password').value==''){document.getElementById('password').style.borderColor="red";}//change color here
            if (document.getElementById('email').value==''){document.getElementById('email').style.borderColor="red";}//change color here

        }

        function LogInModal(){
            document.getElementById("cover").style.display = "block"
            document.getElementById("overlay").style.display = "block";
            document.getElementById("loginForm").style.display = "block";
            document.getElementById("signupForm").style.display = "none";
            document.getElementById("signupHeader").style.color = "black";
            document.getElementById("loginHeader").style.color = "lavender";
            disableBodyScroll();
        }

        function SignUpModal(){
            document.getElementById("cover").style.display = "block"
            document.getElementById("overlay").style.display = "block";
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("signupForm").style.display = "block";
            document.getElementById("signupHeader").style.color = "lavender";
            document.getElementById("loginHeader").style.color = "black";
            disableBodyScroll();
        }

        // Hide modal and enable scroll when overlay is clicked
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('overlay').addEventListener('click', function() {
                document.getElementById("cover").style.display = "none";
                document.getElementById("overlay").style.display = "none";
                enableBodyScroll();
            });
        });