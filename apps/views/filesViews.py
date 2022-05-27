from flask import Blueprint, jsonify, request

from apps.service.filesService import resp_file_upload, resp_file_download

app = Blueprint('filesView', __name__)


@app.route('/file/upload', methods=['POST'])
def file_upload():
    file = request.files['file']
    resp_data = resp_file_upload(file)

    return jsonify(resp_data)


@app.route('/file/download', methods=['POST'])
def file_download():
    requ_data = request.json
    return resp_file_download(requ_data)
