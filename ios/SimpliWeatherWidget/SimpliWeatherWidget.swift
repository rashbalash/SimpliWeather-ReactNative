//
//  SimpliWeatherWidget.swift
//  SimpliWeatherWidget
//
//  Created by Rashad Balashov on 3/11/21.
//

import WidgetKit
import SwiftUI
import Intents

struct Shared:Decodable {
  let c_locationName: String,
      c_currentTemp: Int,
      c_condition: String,
      c_hiTemp: Int,
      c_loTemp: Int
}

struct Provider: IntentTimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
      SimpleEntry(date: Date(), configuration: ConfigurationIntent(), currentTemp: 69, condition: "Misty", hiTemp: 72, loTemp: 66, locationName: "Baltimore")
    }

    func getSnapshot(for configuration: ConfigurationIntent, in context: Context, completion: @escaping (SimpleEntry) -> ()) {
      let entry = SimpleEntry(date: Date(), configuration: ConfigurationIntent(), currentTemp: 69, condition: "Misty", hiTemp: 72, loTemp: 66, locationName: "Baltimore")
        completion(entry)
    }

    func getTimeline(for configuration: ConfigurationIntent, in context: Context, completion: @escaping (Timeline<Entry>) -> ()) {
        var entries: [SimpleEntry] = []
        var locationName = "Baltimore"
        var currentTemp = 69
        var hiTemp = 72
        var loTemp = 66
        var condition = "Misty"
        
      let sharedDefaults = UserDefaults.init(suiteName: "com.SimpliWeather")
      if sharedDefaults != nil {
        do {
          let shared = sharedDefaults?.string(forKey: "myAppData")
          if (shared != nil) {
            let data = try JSONDecoder().decode(Shared.self, from: shared!.data(using: .utf8)!)
            locationName = data.c_locationName
            currentTemp = data.c_currentTemp
            hiTemp = data.c_hiTemp
            loTemp = data.c_loTemp
            condition = data.c_condition
          }
        } catch {
          print(error)
        }
      }
        
        // Generate a timeline consisting of five entries an hour apart, starting from the current date.
        let currentDate = Date()
        for hourOffset in 0 ..< 5 {
            let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
          let entry = SimpleEntry(date: entryDate, configuration: ConfigurationIntent(), currentTemp: currentTemp, condition: condition, hiTemp: hiTemp, loTemp: loTemp, locationName: locationName)
          entries.append(entry)
        }

        let timeline = Timeline(entries: entries, policy: .atEnd)
        completion(timeline)
    }
}

struct SimpleEntry: TimelineEntry {
    var date: Date
    let configuration: ConfigurationIntent
    let currentTemp: Int
    let condition: String
    let hiTemp: Int
    let loTemp: Int
    //let svgIcon: SvgIcon
    //let dailyWeatherData: Array
    //let hourlyWeatherData: Array
    let locationName: String
}

struct SimpliWeatherWidgetEntryView : View {
    var entry: Provider.Entry

    var body: some View {
      ZStack {
        Color("WidgetBackground").ignoresSafeArea()
        VStack (alignment: .center) {
          Text(entry.locationName).padding(.top, 10)
          Spacer()
          
          HStack {
            Text(String(entry.currentTemp) + "\u{00B0}").font(.largeTitle)
          }
          
          Spacer()
          
          HStack {
            Text(entry.condition + " \u{23D0} ")
            Text(String(entry.hiTemp) + "\u{00B0}")
            Text("\u{23D0}")
            Text(String(entry.loTemp) + "\u{00B0}")
          }.padding(.bottom, 10)
        }
      }
    }
}

@main
struct SimpliWeatherWidget: Widget {
    let kind: String = "SimpliWeatherWidget"

    var body: some WidgetConfiguration {
        IntentConfiguration(kind: kind, intent: ConfigurationIntent.self, provider: Provider()) { entry in
            SimpliWeatherWidgetEntryView(entry: entry)
        }
        .configurationDisplayName("SimpliWeather")
        .description("Glanceable Weather Information")
    }
}

struct SimpliWeatherWidget_Previews: PreviewProvider {
    static var previews: some View {
      SimpliWeatherWidgetEntryView(entry: SimpleEntry(date: Date(), configuration: ConfigurationIntent(), currentTemp: 69, condition: "Misty", hiTemp: 72, loTemp: 66, locationName: "Baltimore"))
            .previewContext(WidgetPreviewContext(family: .systemSmall))
    }
}
