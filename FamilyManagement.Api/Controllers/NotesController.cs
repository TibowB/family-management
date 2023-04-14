using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FamilyManagement.Api.Dtos;
using FamilyManagement.Shared.Models;
using Microsoft.AspNetCore.Mvc;

namespace FamilyManagement.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotesController : ControllerBase
    {
        public static readonly List<Note> notes = new()
        {
            new Note() { Id = 1, Content = "TOTO" },
            new Note() { Id = 2, Content = "TATA" }
        };

        [HttpGet]
        public ActionResult Get()
        {
            return Ok(notes);
        }

        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var note = notes.Find(x => x.Id == id);

            if (note == null)
            {
                return NotFound();
            }

            return Ok(note);
        }

        [HttpPost]
        public ActionResult Post([FromBody] NoteDto noteDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            Note newNote = new()
            {
                Id = notes.Count + 1,
                Content = noteDto.Content
            };

            notes.Add(newNote);

            return Ok(newNote.Id);
        }

        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Note updatedNote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var note = notes.Find(x => x.Id == id);

            if (note == null)
            {
                return NotFound();
            }

            note = updatedNote;

            return Ok(updatedNote);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var note = notes.Find(x => x.Id == id);

            if (note == null)
            {
                return NotFound();
            }

            notes.Remove(note);

            return Ok();
        }
    }
}

