import { ICanvasSection, ICanvasSubsection, SeatType } from "@interfaces";

export const SEAT_SIZE = 10;
export const SEATS_DISTANCE = 15;
export const SUBSECTION_PADDING = 30;

export const SECTIONS_MARGIN = 10;
export const SECTION_TOP_PADDING = 40;

export const getSubsectionWidth = (subsection: ICanvasSubsection) => {
  const rows = Object.keys(subsection.seats_by_rows);
  const maxRows = Math.max(
    ...rows.map((r) => Object.keys(subsection.seats_by_rows[r]).length)
  );
  return SEATS_DISTANCE * maxRows + SUBSECTION_PADDING * 2;
};

export const getSubsectionHeight = (subsection: ICanvasSubsection) => {
  const rows = Object.keys(subsection.seats_by_rows);
  return SEATS_DISTANCE * rows.length + SUBSECTION_PADDING * 2;
};

export const getSectionWidth = (section: ICanvasSection) => {
  const width = section.subsections.reduce((sum: any, subsection: any) => {
    return sum + getSubsectionWidth(subsection);
  }, 0);
  return width;
};

export const getSectionHeight = (section: ICanvasSection) => {
  return (
    Math.max(...section.subsections.map(getSubsectionHeight)) +
    SECTION_TOP_PADDING
  );
};

export const getMaximimSectionWidth = (sections: ICanvasSection[]) => {
  return Math.max(...sections.map(getSectionWidth));
};

export const getSeatType = (
  selectedSeatsIds: string[],
  seatName: string
): SeatType => {
  const index = selectedSeatsIds.indexOf(seatName);
  if (index >= 0) {
    return "isSelected";
  }
  return "default";
};

export const getColor = (type: SeatType = "default") => {
  switch (type) {
    case "isSelected":
      return "red";
    case "isBooked":
      return "lightgrey";
    default:
      return "1b728d";
  }
};
