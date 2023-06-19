import { Fdsfd as TFdsfd } from "../api/fdsfd/Fdsfd";

export const FDSFD_TITLE_FIELD = "firstName";

export const FdsfdTitle = (record: TFdsfd): string => {
  return record.firstName || String(record.id);
};
