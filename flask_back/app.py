from flask import Flask, render_template, request, send_file
import os
app = Flask(__name__)



@app.route('/download', methods = ['GET', 'POST'])
def down_file():
	if request.method == 'POST':
		sw=0
		files = os.listdir("./input")
		# for x in files:
		# 	if(x==request.form['file']):
		# 		sw=1
        
		path = "./input/" 
		return send_file(path + "sample.wav",
				attachment_filename = "sample.wav",
				as_attachment=True)

@app.route('/test', methods=['POST'])
def test_cli():
    if request.method == 'POST':
        print(os.system('python3 -m "print("m")"'))
        return "1"


@app.route('/upload', methods=['POST'])
def check():
    if request.method == 'POST':
        global result
        result = request.files["voice"]
        
        os.makedirs("input/", exist_ok=True)
        result.save(os.path.join("input/", result.filename))
        return  "1"





if __name__ == '__main__':
    app.run(host = '127.0.0.1', port=8080, debug=True)





