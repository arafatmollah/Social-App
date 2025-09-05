using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace API.Entities;

public class Member
{
    public string Id { get; set; } = null!;
    public DateOnly dateOfBirth { get; set; }
    public string? imageUrl { get; set; }
    public required string DisplayName { get; set; }
    public DateTime Created { get; set; } = DateTime.UtcNow;
    public DateTime LastActive { get; set; } = DateTime.UtcNow;

    public string? Gender { get; set; }
    public string? Descroiption { get; set; }
    public string? City { get; set; }
    public string? Country { get; set; }

    [ForeignKey(nameof(Id))]
    public AppUser User { get; set; } = null!;
}




