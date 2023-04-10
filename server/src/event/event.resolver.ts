import { Args, Query, Resolver } from '@nestjs/graphql';
import { EventService } from './event.service';
import { Event } from './models/event.model';

@Resolver('Event')
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  // // @UseInterceptors(FileInterceptor('image'))
  // @Mutation(() => Event)
  // createEvent(
  //   @Args('createEvent') createEventInput: CreateEventInput,
  //   // @UploadedFile(
  //   //   new ParseFilePipe({
  //   //     validators: [
  //   //       new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
  //   //       new MaxFileSizeValidator({ maxSize: 1024 ** 2 * 2 }),
  //   //     ],
  //   //   }),
  //   // )
  //   // image: Express.Multer.File,
  // ) {
  //   // console.log(image);
  //   return this.eventService.createEvent(createEventInput);
  // }

  @Query(() => Event)
  getEvent(@Args('id') id: number) {
    return this.eventService.getEvent(id);
  }

  @Query(() => [Event])
  getAllEvents() {
    return this.eventService.getAllEvents();
  }
}
