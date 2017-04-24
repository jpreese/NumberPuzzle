(function ()
{
  window.$ = function (selector)
  {

    if (selector.indexOf("#") > 0)
    {
      return new HtmlElement(document.getElementById(selector.substring(1)));
    }
    else
    {
      return new HtmlElementCollection(document.getElementsByClassName(selector.substring(1)));
    }
  }

  var HtmlElement = function (element)
  {

    this.html = function ()
    {
      return element.innerHTML;
    }

    this.click = function (f)
    {
      element.onclick = function ()
      {
        f();
      }
    }
  }

  var HtmlElementCollection = function (elementArray)
  {

    this.click = function (f)
    {
      for (var x = 0; x < elementArray.length; x++)
      {
        elementArray[x].onclick = function ()
        {
          f(this);
        }
      }
    }

  }
})();