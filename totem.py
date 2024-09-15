import http.server
import socketserver
import webbrowser
import threading
import time

PORT = 9090

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def start_server():
    handler = MyHttpRequestHandler
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f"Servindo na porta {PORT}")
        httpd.serve_forever()

def open_browser():
    time.sleep(1)  # Aguarda o servidor iniciar
    webbrowser.open(f"http://localhost:{PORT}")

if __name__ == "__main__":
    # Inicia o servidor em uma thread separada
    server_thread = threading.Thread(target=start_server)
    server_thread.daemon = True
    server_thread.start()

    # Abre o navegador
    try:
        open_browser()
    except Exception as e:
        print(f"Failed to open browser: {e}")

    # Keep the main thread alive to allow the server to continue running
    server_thread.join()
