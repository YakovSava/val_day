from os.path import exists
from asyncio import run
from aiohttp.web import Response, RouteTableDef, Request, Application, R

app = Application()
route = RouteTableDef()

def get_file(filename:str) -> str:
    with open(filename, 'r', encoding='utf-8') as file:
        return file.read()

@route.get('/')
async def main_page(request:Request):
    return