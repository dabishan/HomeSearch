using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Umbraco.Core;
using Umbraco.Core.Models;
using Umbraco.Web.Mvc;
using Our.Umbraco.DocTypeGridEditor.Web.Controllers;

namespace HomeSearch.Controllers
{
    public class HomeSearchSurfaceController : DocTypeGridEditorSurfaceController
    {
        [ChildActionOnly]
        public ActionResult HomeSearch()
        {
            return CurrentPartialView();
        }
        
    }
}