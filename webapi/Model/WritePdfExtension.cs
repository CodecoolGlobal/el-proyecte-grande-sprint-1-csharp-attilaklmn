using System.Drawing;
using iText.Kernel.Font;
using iText.Kernel.Geom;
using iText.Kernel.Pdf;
using iText.Kernel.Pdf.Canvas.Draw;
using iText.Layout;
using iText.Layout.Borders;
using iText.Layout.Element;
using iText.Layout.Properties;
//using iText.Layout.Properties;
using webapi.Model.Entity;

namespace webapi.Model;

public static class WritePdfExtension
{
    public static byte[] GeneratePdf(this List<Ticket> tickets, string movieName, string roomName)
    {
        using (MemoryStream ms = new MemoryStream())
        {
            PdfWriter pdfWriter = new PdfWriter(ms);
            PdfDocument pdfDoc = new PdfDocument(pdfWriter);
            Document document = new Document(pdfDoc);
            
            SolidLine line = new SolidLine(1f);
            line.SetLineWidth(1f);
            
            foreach (var ticket in tickets)
            {
                document.Add(new Paragraph($"Dear {ticket.User.Username}").AddStyle(GetStyle(TextAlignment.CENTER, "Helvetica", 12)));
                document.Add(new Paragraph($"This is Your ticket for {movieName}").AddStyle(GetStyle(TextAlignment.LEFT, "Helvetica", 12)));
                document.Add(new Paragraph($"The Screening is at {ticket.Screening.StartingDate},").AddStyle(GetStyle(TextAlignment.LEFT, "Helvetica", 12)));
                document.Add(new Paragraph($"in {roomName}").AddStyle(GetStyle(TextAlignment.LEFT, "Helvetica", 12)));
                document.Add(new Paragraph($"Your seat: {ticket.Seat.Row} row,\n {ticket.Seat.Number} number").AddStyle(GetStyle(TextAlignment.RIGHT, "Helvetica", 12)).
                    AddStyle(GetBorder(150, 310)));
                document.Add(new LineSeparator(line));
            }
            document.Close();
            
            byte[] pdfData = ms.ToArray();
            return pdfData;
        }
    }
    private static Style GetStyle(TextAlignment textAlignment, string font, int fontsize)
    {
        Style textStyle = new Style()
            .SetFont(PdfFontFactory.CreateFont(font))
            .SetFontSize(fontsize)
            .SetMarginTop(0f)
            .SetMarginBottom(0f)
            .SetTextAlignment(textAlignment);

        return textStyle;
    }

    private static Style GetBorder(int width, int marginLeft)
    {
        Style borderStyle = new Style()
            .SetBorder(new SolidBorder(1f))
            .SetWidth(width)
            .SetMarginTop(10f)
            .SetMarginBottom(10f)
            .SetMarginLeft(marginLeft);

        return borderStyle;
    }
}