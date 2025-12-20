import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";


interface WorkingHoursModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  triggerText?: string;
  onOpenChange?: (open: boolean) => void;
}

interface WorkingHour {
  day: string;
  hours: string;
  isClosed?: boolean;
}

const workingHours: WorkingHour[] = [
  { day: "شنبه", hours: "۱۶:۰۰- ۰۸:۰۰ " },
  { day: "یکشنبه", hours: "۱۶:۰۰- ۰۸:۰۰ " },
  { day: "دوشنبه", hours: "۱۶:۰۰- ۰۸:۰۰ " },
  { day: "سه‌شنبه", hours: "۱۶:۰۰- ۰۸:۰۰ " },
  { day: "چهارشنبه", hours: "۱۶:۰۰- ۰۸:۰۰ " },
  { day: "پنج‌شنبه", hours: "۱۶:۰۰- ۰۸:۰۰ " },
  { day: "جمعه", hours: "تعطیل", isClosed: true },
];

export function WorkingHoursModal({
  onClose,
  triggerText = "ساعات کاری",
  open,
  onOpenChange,
}: WorkingHoursModalProps) {
  return (
    <div>
      <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
        {/* <DialogTrigger asChild>
          <Button variant="outline" className="bg-amber-700">{triggerText}</Button>
        </DialogTrigger> */}
        <DialogContent className="working-hours-modal w-94 h-128 bg-others-bg1 flex flex-col gap-9 pt-8 pr-8 pl-8 pb-12">
          <DialogHeader>
            <DialogTitle className="working-hours-title text-neutral-900 text-center text-xl pt-10">
              ساعت کاری <span className="text-tertiary-500">مکین</span>
            </DialogTitle>
          </DialogHeader>
          <div className="working-hours-list flex flex-col gap-6">
            {workingHours.map((item, index) => (
              <div
                key={index}
                className="working-hours-row flex justify-between"
              >
                <span className="text-neutral-900">{item.day}</span>
                <span
                  className={`${
                    item.isClosed ? "text-error-600" : "text-neutral-900"
                  }`}
                >
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default WorkingHoursModal;
