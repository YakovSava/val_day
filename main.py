from os.path import exists
from aiohttp.web import Response, RouteTableDef, Request, Application, HTTPFound, run_app

app = Application()
route = RouteTableDef()

def auto_check(path:str) -> str:
    print(path, path.split('.')[-1])
    match path.split('.')[-1]:
        case 'css':
            return 'text/css'
        case 'html':
            return 'text/html'
        case 'js':
            return 'text/javascript'
        case _:
            return 'text/txt'

def get_file(filename:str) -> str:
    with open(filename, 'r', encoding='utf-8') as file:
        return file.read()

@route.get('/')
async def main_page(request:Request):
    return HTTPFound('/main.html')

@route.get('/{urlpath}')
async def get(request:Request) -> Response:
    url = str(request.url)
    fl = './html/'+url.split('/', 3)[-1]
    print(fl)
    if exists(fl):
        return Response(body=get_file(fl), content_type=auto_check(fl))
    else:
        return Response(status=404)

if __name__ == '__main__':
    app.add_routes(route)
    run_app(app, host='localhost', port=80)