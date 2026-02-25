<?php
include 'connect.php';

$email = "";
$firstName = "";
$lastName = "";
$loginError = "";

if(isset($_POST['psw'])){
    $email = $_POST['email'];
    $password = $_POST['psw'];
    $password = md5($password);
    
    // Check if user exists
    $loginQuery = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = $conn->query($loginQuery);
    
    if($result->num_rows > 0){
        // User found - display their data
        $user = $result->fetch_assoc();
        $firstName = $user['firstName'];
        $lastName = $user['lastName'];
    }
    else{
        $loginError = "Invalid Email or Password!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f4f4f4 url('wp6701298-dark-series-hd-desktop-wallpapers.jpg') no-repeat center center fixed;
            background-size: cover;
        }
        
        .profile-container {
            background-color: white;
            padding: 40px;
            width: 400px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            text-align: center;
        }
        
        .profile-container h1 {
            color: #2196F3;
            margin-bottom: 30px;
        }
        
        .profile-info {
            text-align: left;
            margin: 20px 0;
        }
        
        .profile-info label {
            display: block;
            font-weight: bold;
            margin-top: 15px;
            color: #333;
        }
        
        .profile-info p {
            background-color: #f9f9f9;
            padding: 10px;
            border-radius: 4px;
            margin: 5px 0;
            border-left: 4px solid #2196F3;
        }
        
        .logout-btn {
            background-color: #f44336;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            width: 100%;
            margin-top: 20px;
            font-size: 16px;
        }
        
        .logout-btn:hover {
            background-color: #da190b;
        }
        
        .error-message {
            color: #f44336;
            background-color: #ffebee;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 20px;
            border-left: 4px solid #f44336;
        }
        
        .success-badge {
            display: inline-block;
            background-color: #04AA6D;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            margin-bottom: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>

<div class="profile-container">
    <?php if($loginError != ""): ?>
        <div class="error-message">
            <strong>Login Failed!</strong><br>
            <?php echo $loginError; ?>
        </div>
        <a href="index.php" style="color: #2196F3; text-decoration: none;">← Back to Login</a>
    <?php else: ?>
        <div class="success-badge">✓ LOGIN SUCCESSFUL</div>
        <h1>Welcome!</h1>
        
        <div class="profile-info">
            <label>First Name:</label>
            <p><?php echo htmlspecialchars($firstName); ?></p>
            
            <label>Last Name:</label>
            <p><?php echo htmlspecialchars($lastName); ?></p>
            
            <label>Email:</label>
            <p><?php echo htmlspecialchars($email); ?></p>
        </div>
        
        <a href="index.php">
            <button class="logout-btn">Logout</button>
        </a>
    <?php endif; ?>
</div>

</body>
</html>
