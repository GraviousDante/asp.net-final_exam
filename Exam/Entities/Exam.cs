using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Exam.Entities
{
	[Table("Exams")]
	public class Exams
	{
		[Key]
		public int Id { get; set; }

		[Required]
		[StringLength(200)]
		public string examSubject { get; set; }

		[Required]
		public TimeSpan startTime { get; set }

		[Required]
		public DateTime examDate { get; set }

		[required]
		public int examDuration { get; set }

	}

