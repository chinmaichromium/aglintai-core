import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@components/ui/card';
import { Label } from '@components/ui/label';
import { ScrollArea } from '@components/ui/scroll-area';
import { Skeleton } from '@components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';
import { Check, X } from 'lucide-react';
import { useRequestMetics } from 'src/app/(authenticated)/reports/_common/hook/candidate/use-request_metrics';

const CheckIcon = () => <Check className='h-4 w-4 text-green-500' />;
const XIcon = () => <X className='h-4 w-4 text-red-500' />;

export default function Checklist() {
  const {data ,isFetching} = useRequestMetics();
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Coordinator Checklist</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='overflow-x-auto'>
          <div className='w-max min-w-full'>
            {isFetching||data.length?<Table>
              <ScrollArea className='h-[calc(100vh-15rem)]'>
                <TableHeader>
                  <TableRow>
                      <TableHead className='w-[150px]'>Coordinator</TableHead>
                      <TableHead className='w-[150px]'>
                        Candidate Name
                      </TableHead>
                      <TableHead className='w-[150px]'>Recruiter</TableHead>
                      <TableHead className='w-[150px]'>
                        Interview Type
                      </TableHead>
                      <TableHead className='w-[100px]'>
                        Scheduling Request
                      </TableHead>
                      <TableHead className='w-[100px]'>Avail Request</TableHead>
                      <TableHead className='w-[100px]'>
                        Avail Received
                      </TableHead>
                      <TableHead className='w-[100px]'>Confirmation</TableHead>
                      <TableHead className='w-[150px]'>
                        Candidate Status
                      </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {!isFetching?data.map((item,index) => (
                    <TableRow key={index}>
                        <TableCell>{item.interview_coordinator}</TableCell>
                        <TableCell>{item.candidate_name}</TableCell>
                        <TableCell>{item.recruiting_coordinator}</TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>
                          {item.self_scheduling_req ? (
                            <CheckIcon />
                          ) : (
                            <XIcon />
                          )}
                        </TableCell>
                        <TableCell>
                          {item.availability_req ? <CheckIcon /> : <XIcon />}
                        </TableCell>                      
                        <TableCell>
                          {item.availability_recived ? <CheckIcon /> : <XIcon />}
                        </TableCell>

                        <TableCell>
                          {item.confirmation ? <CheckIcon /> : <XIcon />}
                        </TableCell>
                     
                        <TableCell>{item.candidate_status}</TableCell>
                    </TableRow>
                  )): <SkeletonRows/>}
                </TableBody>
              </ScrollArea>
            </Table>:<div className='flex min-h-40 w-full justify-center items-center bg-secondary'>
              <Label>No Data Available</Label>
            </div>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SkeletonRows (){
  return <>
            <TableRow>
              <TableCell><Skeleton className='h-6 w-full'/></TableCell>
              <TableCell><Skeleton className='h-6 w-full'/></TableCell>
              <TableCell><Skeleton className='h-6 w-full'/></TableCell>
              <TableCell><Skeleton className='h-6 w-full'/></TableCell>
              <TableCell>
                <Skeleton className='h-6 w-full'/>
              </TableCell>
              <TableCell>
                <Skeleton className='h-6 w-full'/>
              </TableCell>
              <TableCell>
                <Skeleton className='h-6 w-full'/>
              </TableCell>
              <TableCell>
                <Skeleton className='h-6 w-full'/>
              </TableCell>
              <TableCell><Skeleton className='h-6 w-full'/></TableCell>
          </TableRow>
          <TableRow>
              <TableCell><Skeleton className='h-6 w-full'/></TableCell>
              <TableCell><Skeleton className='h-6 w-full'/></TableCell>
              <TableCell><Skeleton className='h-6 w-full'/></TableCell>
              <TableCell><Skeleton className='h-6 w-full'/></TableCell>
              <TableCell>
                <Skeleton className='h-6 w-full'/>
              </TableCell>
              <TableCell>
                <Skeleton className='h-6 w-full'/>
              </TableCell>
              <TableCell>
                <Skeleton className='h-6 w-full'/>
              </TableCell>

              <TableCell>
                <Skeleton className='h-6 w-full'/>
              </TableCell>
              <TableCell><Skeleton className='h-6 w-full'/></TableCell>
          </TableRow>
          <TableRow>
              <TableCell><Skeleton className='h-6 w-full'/></TableCell>
              <TableCell><Skeleton className='h-6 w-full'/></TableCell>
              <TableCell><Skeleton className='h-6 w-full'/></TableCell>
              <TableCell><Skeleton className='h-6 w-full'/></TableCell>
              <TableCell>
                <Skeleton className='h-6 w-full'/>
              </TableCell>
              <TableCell>
                <Skeleton className='h-6 w-full'/>
              </TableCell>
              <TableCell>
                <Skeleton className='h-6 w-full'/>
              </TableCell>
              <TableCell>
                <Skeleton className='h-6 w-full'/>
              </TableCell>
              <TableCell><Skeleton className='h-6 w-full'/></TableCell>
          </TableRow>
        </>
}