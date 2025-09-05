using System;

namespace API.Entities;

public class Photo
{
    public int Id { get; set; }
    public string Url { get; set; } = null!;
    public string PublicId { get; set; } = null!;
    public Member Member { get; set; } = null!;
}
