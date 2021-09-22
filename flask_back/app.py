from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def upload():
    return render_template('upload.html')

@app.route('/check', methods=['POST'])
def check():
    if request.method == 'POST':
        global result
        result= request.files['voice']
        return result.filename
        #return render_template('check.html',result = result)

if __name__ == '__main__':
    app.run(host = '127.0.0.1', port=8080, debug=True)