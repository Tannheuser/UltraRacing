@NgModule({
  imports: [
    PerfectScrollbarModule,
    SharedModule,
    EffectsModule.forFeature([AudienceEffects]),
  ],
  declarations: [
    AudienceListComponent,
    AudienceListItemComponent,
    AudienceFolderComponent,
    NewAudienceFolderComponent
  ],
  providers: [
    AudiencesService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    AudienceListComponent
  ]
})
export class AudienceListModule {
}
