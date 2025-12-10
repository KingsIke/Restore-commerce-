using System;
using Microsoft.AspNetCore.Mvc;

namespace RESTORE_API.Controllers;

public class BugErrorController: BaseApiController
{
    [HttpGet("not-found")]
    public IActionResult GetNotFound()
    {
       return NotFound();
    }

    [HttpGet("bad-request")]
    public IActionResult GetBedRequest()
    {
        return BadRequest("This is async bad request");
    }
   
   [HttpGet("Unauthorized")]
    public IActionResult GetUnauthorized()
    {
        return Unauthorized();
    }
  
    [HttpGet("validation-error")]
    public IActionResult GetValidationError()
    {
        ModelState.AddModelError("Problem1", "This is the first error");
        ModelState.AddModelError("Problem2", "This is the second error");
        return ValidationProblem();
    }
   
    [HttpGet("server-error")]
    public IActionResult GetServerError()
    {
       throw new Exception("This is server error");
    }

}
