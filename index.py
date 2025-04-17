from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='build')    # Specify the static folder for serving HTML files

@app.route('/')
@app.route('/home')
def home():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/about')
def about():
    return send_from_directory(app.static_folder, 'about.html')

@app.route('/services')
def services():
    return send_from_directory(app.static_folder, 'services.html')

@app.route('/contacts')
def contacts():
    return send_from_directory(app.static_folder, 'contacts.html')

@app.route('/blog')
def blog():
    return send_from_directory(app.static_folder, 'blog.html')
    

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
