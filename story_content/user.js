function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67lBM8iITar":
        Script1();
        break;
      case "6TYvbvL2Kii":
        Script2();
        break;
  }
}

function Script1()
{
  window.parent.parent.updatescormstatus(g_oContentResults.strStatus, 1); 
}

function Script2()
{
  window.parent.parent.location.href = window.parent.parent.location.href
}

