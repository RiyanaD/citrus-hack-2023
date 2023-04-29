from urllib.request import urlopen
from bs4 import BeautifulSoup
import sys


def main():
    getURL = input("Enter URL: ")
    print("\n")

    page = urlopen(getURL)

    html = page.read().decode('utf-8')

    soup = BeautifulSoup(html, "html.parser")

    pageContent = []

    title = soup.find("h1")

    pageContent.append(title.get_text())

    for pTag in soup.find_all("p"):
        pageContent.append(pTag.get_text())

    pageContent = " ".join(pageContent)
    
    print(pageContent)

    
    
if __name__ == '__main__':
    main()

